


export default function apiHandler(req, res){
    const existingUser = 'aj@gmail.com'
    if(req.body.email !== existingUser){
        res.Status(200).json({message: 'Success woooo'})
    }
}