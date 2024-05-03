import React from "react";

const Bio = () => {
  return (
    <section className="bio">
      <h2 className="sectionHead">Bio</h2>
      <img id="profilePic" src="profilepic.jpg" alt="" height="250px"/>
      <article>
        <p>
          <span className="standoutTxt">This is me</span>, Fergus Brown--web developer and recent veteran of the US
          Army. As I transition from my job as a linguist, I'm seeking the
          opportunity to build and create whilst cultivating my growing
          skillset. <br/><br/><strong>I'm on the look for opportunities </strong>to contribute to interesting and innovative projects. If
          you're looking for a dedicated and adaptable team member with a strong
          foundation in technology, language-learning, and discipline gained
          from military service, <strong>let's connect.</strong>
        </p>
      </article>
    </section>
  );
};

export default Bio;
