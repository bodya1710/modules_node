
class signInController{

    renderSingIn(req,res){
            res.render('signIn');
    };
    signInUser(req,res){
            res.redirect(`/users/${req.params.id + 1}`);
    };
};

module.exports = new signInController();