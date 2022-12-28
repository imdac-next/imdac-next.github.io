import{_ as n,M as r,p as d,q as l,R as t,t as e,N as o,a3 as i}from"./framework-dd056dd6.js";const s={},c=i('<h1 id="movie-mayhem-db-ii" tabindex="-1"><a class="header-anchor" href="#movie-mayhem-db-ii" aria-hidden="true">#</a> Movie Mayhem DB II</h1><h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>For this assignment, you will demonstrate your skills and understanding of SQL Queries and the SELECT, INSERT, UPDATE, and DELETE statements by creating queries to retrieve and manipulate data from the Movie Mayhem database.</p><h2 id="project-setup" tabindex="-1"><a class="header-anchor" href="#project-setup" aria-hidden="true">#</a> Project Setup</h2><h3 id="_1-clone-the-repository" tabindex="-1"><a class="header-anchor" href="#_1-clone-the-repository" aria-hidden="true">#</a> 1. Clone the Repository</h3><p>Clone the repository from GitHub and use the provided file to complete the assignment.</p><h3 id="_2-import-the-movie-mayhem-database" tabindex="-1"><a class="header-anchor" href="#_2-import-the-movie-mayhem-database" aria-hidden="true">#</a> 2. Import the Movie Mayhem Database</h3><p>To import the database, using phpMyAdmin, complete the following instructions.</p>',8),m={href:"http://adminer.test",target:"_blank",rel:"noopener noreferrer"},u={href:"http://localhost/adminer",target:"_blank",rel:"noopener noreferrer"},v=i("<li>Log in to Adminer using the root username and password</li><li>From the Adminer homepage, click on the &quot;Import&quot; link found on the left side of the page.</li><li>Under the &quot;File upload&quot; section, click the &quot;Choose File&quot; button. Choose the <code>movie_mayhem.sql</code> file found in the repository.</li><li>Click the &quot;Execute&quot; button.</li><li>Once the importing has been completed, the <code>movie_mayhem</code> database should be listed in the DB select box.</li><li>Once the importing has been completed, select the movie_mayhem database from the DB select box.</li><li>With the movie_mayhem database selected, click on the &quot;SQL command&quot; link on the left side of the page. From this page, you can execute custom SQL commands.</li>",7),b=i('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>Create <strong>ONE</strong> query for each of the tasks below. Save the queries to the <code>queries.sql</code> file.</p><h4 id="_1-add-a-movie-to-the-movies-table-with-the-following-data" tabindex="-1"><a class="header-anchor" href="#_1-add-a-movie-to-the-movies-table-with-the-following-data" aria-hidden="true">#</a> 1. Add a movie to the <code>movies</code> table with the following data:</h4><table><thead><tr><th style="text-align:center;">movie_title</th><th style="text-align:center;">director</th><th style="text-align:center;">year</th><th style="text-align:center;">genre_id</th></tr></thead><tbody><tr><td style="text-align:center;">&#39;WALL-E&#39;</td><td style="text-align:center;">&#39;Brad Bird&#39;</td><td style="text-align:center;">2008</td><td style="text-align:center;">2</td></tr></tbody></table><h4 id="_2-using-a-subquery-add-a-movie-to-the-movies-table-with-the-following-data" tabindex="-1"><a class="header-anchor" href="#_2-using-a-subquery-add-a-movie-to-the-movies-table-with-the-following-data" aria-hidden="true">#</a> 2. Using a subquery, add a movie to the <code>movies</code> table with the following data:</h4><table><thead><tr><th style="text-align:center;">movie_title</th><th style="text-align:center;">director</th><th style="text-align:center;">year</th><th style="text-align:center;">genre_title</th></tr></thead><tbody><tr><td style="text-align:center;">&#39;Inside Out&#39;</td><td style="text-align:center;">&#39;Peter Doctor&#39;</td><td style="text-align:center;">2014</td><td style="text-align:center;">&#39;Family&#39;</td></tr></tbody></table><h4 id="_3-update-the-year-year-to-2015-for-the-movie-with-the-title-movie-title-inside-out" tabindex="-1"><a class="header-anchor" href="#_3-update-the-year-year-to-2015-for-the-movie-with-the-title-movie-title-inside-out" aria-hidden="true">#</a> 3. Update the year (<code>year</code>) to <code>2015</code> for the movie with the title (<code>movie_title</code>) &#39;Inside Out&#39;.</h4><h4 id="_4-using-a-subquery-update-the-director-director-to-peter-doctor-and-the-genre-to-romance-for-the-movie-with-the-title-movie-title-wall-e" tabindex="-1"><a class="header-anchor" href="#_4-using-a-subquery-update-the-director-director-to-peter-doctor-and-the-genre-to-romance-for-the-movie-with-the-title-movie-title-wall-e" aria-hidden="true">#</a> 4. Using a subquery, update the director (<code>director</code>) to &#39;Peter Doctor&#39; and the genre to &#39;Romance&#39; for the movie with the title (<code>movie_title</code>) &#39;WALL-E&#39;.</h4><h4 id="_5-remove-all-the-movies-from-the-director-director-peter-doctor" tabindex="-1"><a class="header-anchor" href="#_5-remove-all-the-movies-from-the-director-director-peter-doctor" aria-hidden="true">#</a> 5. Remove all the movies from the director (<code>director</code>) &#39;Peter Doctor&#39;.</h4><h4 id="_6-using-an-inner-join-retrieve-the-movie-title-movie-title-year-year-and-genre-title-genre-title-for-all-the-movies-in-the-movies-table" tabindex="-1"><a class="header-anchor" href="#_6-using-an-inner-join-retrieve-the-movie-title-movie-title-year-year-and-genre-title-genre-title-for-all-the-movies-in-the-movies-table" aria-hidden="true">#</a> 6. Using an INNER JOIN, retrieve the movie title (<code>movie_title</code>), year (<code>year</code>), and genre title (<code>genre_title</code>) for all the movies in the <code>movies</code> table.</h4><h4 id="_7-retrieve-the-total-number-of-movies-in-the-movies-table-with-the-heading-number-of-movies" tabindex="-1"><a class="header-anchor" href="#_7-retrieve-the-total-number-of-movies-in-the-movies-table-with-the-heading-number-of-movies" aria-hidden="true">#</a> 7. Retrieve the total number of movies in the <code>movies</code> table with the heading <code>Number of Movies</code>.</h4><h4 id="_8-retrieve-the-oldest-movie-year-in-the-movies-table-in-the-genre-fantasy" tabindex="-1"><a class="header-anchor" href="#_8-retrieve-the-oldest-movie-year-in-the-movies-table-in-the-genre-fantasy" aria-hidden="true">#</a> 8. Retrieve the oldest movie year in the <code>movies</code> table in the genre &#39;Fantasy&#39;.</h4><h4 id="_9-retrieve-the-number-of-movies-for-each-genre-title-the-headings-should-be-genre-and-number-of-movies" tabindex="-1"><a class="header-anchor" href="#_9-retrieve-the-number-of-movies-for-each-genre-title-the-headings-should-be-genre-and-number-of-movies" aria-hidden="true">#</a> 9. Retrieve the number of movies for each genre title. The headings should be <code>Genre</code> and <code>Number of Movies</code>.</h4><h4 id="_10-retrieve-a-list-of-directors-that-have-more-than-1-movie-in-the-movies-table" tabindex="-1"><a class="header-anchor" href="#_10-retrieve-a-list-of-directors-that-have-more-than-1-movie-in-the-movies-table" aria-hidden="true">#</a> 10. Retrieve a list of directors that have more than 1 movie in the <code>movies</code> table.</h4><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>',15);function f(g,y){const a=r("ExternalLinkIcon"),h=r("Youtube");return d(),l("div",null,[c,t("ol",null,[t("li",null,[e("Open Adminer at "),t("a",m,[e("http://adminer.test"),o(a)]),e(" (macOS) or "),t("a",u,[e("http://localhost/adminer"),o(a)]),e(" (Windows)")]),v]),b,o(h,{id:"zenTic-qrws"})])}const _=n(s,[["render",f],["__file","movie-mayhem-ii.html.vue"]]);export{_ as default};
