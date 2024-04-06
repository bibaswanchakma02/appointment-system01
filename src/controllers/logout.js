const logout = (req,res) =>{
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.clearCookie('connect.sid')
            res.redirect('/');
        }
    });
}

module.exports = logout;