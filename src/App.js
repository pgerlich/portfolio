
import HomepageLayout from "./components/homePage";
import React from "react";

function App() {
  return (
    <div className="App">
      <HomepageLayout
        name="Paul Gerlich"
        title="Software Engineer"
        otherTitles={[
          "Husband",
          "Father",
          "DIYer",
        ]}
        lastTitle={"Your next team mate."}
        phone="309 714 0276"
        email="paul@gerlich.io"
        linkedInProfile="paulgerlich"
        githubProfile="pgerlich"
        site="gerlich.io"/>
    </div>
  );
}

export default App;
