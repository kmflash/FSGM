<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<div class="post" id="post-<?php the_ID(); ?>">

			<div class="entry">

				<?php the_content(); ?>



			</div>

			<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>

		</div>
		
		<hr style='clear: both; height: 0; visibility: hidden;' />


		<?php endwhile; endif; ?>



<?php get_footer(); ?>
