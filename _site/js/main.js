
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});

function filterPosts(type, value) {
    var posts = document.querySelectorAll('.archive-post');

    posts.forEach(function (post) {
        var postTag = post.getAttribute('data-tag');
        var postMonth = post.getAttribute('data-month');

        if (value === 'all') {
            post.style.display = 'block';
        } else if (type === 'tag' && postTag === value) {
            post.style.display = 'block';
        } else if (type === 'month' && postMonth === value) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
