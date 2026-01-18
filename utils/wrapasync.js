<<<<<<< HEAD
function wrapasync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(next);
    }
}

=======
function wrapasync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(next);
    }
}

>>>>>>> b66aa0e (Add Project Files)
module.exports=wrapasync;