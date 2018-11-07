// comments.js
const Comment = require('../models/comment')
module.exports = (app) => {

    // CREATE Comment
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // DELETE Comment
    app.delete('/reviews/comments/:id', (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/reviews/${comment.reviewId}`)
        }).catch((err) => {
            console.log(err.message)
        })
    })
  
}
