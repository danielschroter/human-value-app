import React from "react";
import "./legal-notice.css";

import Footer from "../components/Footer";

export default function legalNotice() {
  return (
    <div className="privacy mx-auto w-11/12 md:max-w-7xl">
      <h1>Imprint</h1>

      <p>
        Information according to § 5 TMG <br /> <br />
        Daniel Schroter <br /> Hanauer Landstraße 38 <br /> 60314 Frankfurt am
        Main Deutschland <br /> E-Mail: projects@schroter.eu <br /> We give out
        our phone on request. <br />
        <br /> Represented by: Daniel Schroter Note: This imprint applies to all
        websites operated by WordfulAI, in particular the above mentioned
        website as well as the blog and the web-based software.
      </p>

      <h1>Disclaimer</h1>
      <h2>Accountability for content</h2>
      <p>
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the contents accuracy, completeness or
        topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these web pages. In this matter,
        please note that we are not obliged to monitor merely the transmitted or
        saved information of third parties, or investigate circumstances
        pointing to illegal activity. Our obligations to remove or block the use
        of information under generally applicable laws remain unaffected by this
        as per §§ 8 to 10 of the Telemedia Act (TMG).
      </p>

      <h2>Accountability for links</h2>

      <p>
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link
        immediately.
      </p>

      <h2>Copyright</h2>

      <p>
        The content and works on these pages created by the site operators are
        subject to German copyright law. The reproduction, editing, distribution
        and any kind of exploitation outside the limits of copyright law require
        the written consent of the respective author or creator. Downloads and
        copies of this page are only permitted for private, non-commercial use.
        Insofar as the content on this site was not created by the operator, the
        copyrights of third parties are respected. In particular, third party
        content is marked as such. Should you nevertheless become aware of a
        copyright infringement, we ask for a corresponding note. As soon as we
        become aware of any legal violations, we will remove such content
        immediately.
      </p>

      <Footer></Footer>
    </div>
  );
}
