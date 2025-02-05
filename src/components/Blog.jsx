import React from "react";

const BlogPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog: About Our Text Editing App</h1>

      {/* Blog Post 1 */}
      <div className="card mb-4">
        <img
          src="https://via.placeholder.com/800x400"
          className="card-img-top"
          alt="Blog Image 1"
        />
        <div className="card-body">
          <h5 className="card-title">How Our Text Editor Helps You Work Smarter</h5>
          <p className="card-text">
            In today’s fast-paced world, productivity tools like text editors play an essential role in helping users complete tasks efficiently. Our text editor is designed with simplicity, speed, and functionality in mind...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on January 15, 2025 by <a href="#">Admin</a>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="card mb-4">
        <img
          src="https://via.placeholder.com/800x400"
          className="card-img-top"
          alt="Blog Image 2"
        />
        <div className="card-body">
          <h5 className="card-title">The Importance of Word and Character Counting in Writing</h5>
          <p className="card-text">
            Writing tools often focus solely on grammar and spelling, but counting words and characters can be just as crucial. Whether you're writing an essay, a novel, or a quick note, understanding the word count can help you hit targets...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on February 5, 2025 by <a href="#">Admin</a>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className="card mb-4">
        <img
          src="https://via.placeholder.com/800x400"
          className="card-img-top"
          alt="Blog Image 3"
        />
        <div className="card-body">
          <h5 className="card-title">Why Our Text Editor is Perfect for Writers</h5>
          <p className="card-text">
            Writers, bloggers, and students alike will find our text editor a perfect fit for their writing needs. We designed it to be easy-to-use, with features like real-time word and character counting, along with a sleek interface...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on February 10, 2025 by <a href="#">Admin</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
