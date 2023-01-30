import Header from "../components/Header";

const AuthorPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About author: Gulmaneli</h1>
          <div className="blog-list">
            <p className="blog-date"></p>
          </div>
          <img src="./img/author.jpeg" className="hero-image" alt="author" />
          <div className="blog-content">
            <p className="blog-text">Gulmaneli has about to finish automation engineering bachelor when he had to do a grade called 'additional hours' and choose to do programing courses, immediately fell in love to do code, so started with java and mySql, he did a program to his fiat an electronic gas injection. After that knew javaScript. Nowadays he uses some frameworks to work with, everyday learn something new and now it's ReactJS framework</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;