import * as React from "react";
import SneakerPreview from "./SneakerPreview";
import SneakerInfo from "./SneakerInfo";

function MainContent() {
  return (
    <section className="sneaker-page">
      <main className="sneaker-content">
        <SneakerPreview />
        <SneakerInfo />
      </main>
    </section>
  );
}

export default MainContent;
