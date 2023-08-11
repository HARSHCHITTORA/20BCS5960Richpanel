const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');

const app= express(express.static("public"));

app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());
app.use(cors({origin:true,credentials:true}));

const stripe=require("stripe")("sk_test_51NdCpGSEHjrwEAXu5akmkeANn1NmpiwD3lP5p1PCj86iLMKdgGfFLAzMc49BMfav6GmDtPxeU6vFZK5pXbmpc04G00LwHlMw8j");

app.post("/checkout",async(req,res,next)=>{
    try{
        const session=await stripe.checkout.sessions.create({
                line_items:req.body.items.map((item)=>({
                    cardDetails:item.cardDetails,
                })),

                success_url:"http://localhost:4242/success.html",
                cancel_url:"http://localhost:4242/cancel.html",


        })
        res.status(200).json(session);
    }catch(error){
        next(error);
    }
});

app.listen(4242,()=>console.log('app is running on port'));