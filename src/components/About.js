import blogData from "../data/blog";

function About() {
  return(
  <aside>
    <img src={blogData.image} placeholder="https://via.placeholder.com/215" alt="blog logo"/>
    <p>blog logo</p>
  </aside>
  );
}
export default About;