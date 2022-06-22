import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

const myStyle={
  backgroundImage:`url(${process.env.PUBLIC_URL+ "/background.png"})`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const About = () => (
  <main class="background" style={myStyle}>
    <h1 className="title is-1">This is the About Page</h1>
    <p> Tellus molestie nunc non blandit massa enim nec dui. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Elit eget gravida cum sociis natoque penatibus et magnis dis. Consequat nisl vel pretium lectus quam. Commodo odio aenean sed adipiscing diam. Pharetra diam sit amet nisl. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Non tellus orci ac auctor augue mauris augue neque gravida. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eu mi bibendum neque egestas. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
      Tincidunt praesent semper feugiat nibh sed. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Vitae suscipit tellus mauris a diam maecenas sed enim. Montes nascetur ridiculus mus mauris vitae. Quam viverra orci sagittis eu volutpat odio. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Dui nunc mattis enim ut tellus elementum. Lacus vestibulum sed arcu non. Est ante in nibh mauris cursus. At consectetur lorem donec massa sapien faucibus et molestie. Commodo nulla facilisi nullam vehicula ipsum a arcu. Enim neque volutpat ac tincidunt vitae. Cras adipiscing enim eu turpis egestas pretium. Adipiscing elit pellentesque habitant morbi tristique senectus et. Scelerisque fermentum dui faucibus in ornare quam viverra. Sed risus ultricies tristique nulla. Ullamcorper malesuada proin libero nunc consequat. Augue mauris augue neque gravida. Cursus eget nunc scelerisque viverra mauris. Sed odio morbi quis commodo odio aenean.
      Senectus et netus et malesuada fames.
    </p>
  </main>
);

export default About;
