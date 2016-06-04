<p><a href="news/create">Create New news</a></p>
<?php foreach ($news as $news_item): ?>

    <h2><?php echo $news_item['headline'] ?></h2>
    <div class="main">
        <?php echo $news_item['message'] ?>
    </div>
    <p><a href="news/<?php echo $news_item['slug'] ?>">View article</a></p>

<?php endforeach ?>