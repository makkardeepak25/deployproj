import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Kids } from "./Kids";
import { Men } from "./Men";
import { Women } from "./Women";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Openings } from "./Openings";
import { Sales } from "./Sales";
import { Faq } from "./Faq";
import { NavBar } from "../Components/Navbar";
import { Banner } from "./../Components/MidBanner";
import { Foot } from "./../Components/Footer";
export function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/men"}>
          <Men />
        </Route>
        <Route path={"/women"}>
          <Women />
        </Route>
        <Route path={"/kids"}>
          <Kids />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/sales"}>
          <Sales />
        </Route>
        <Route path={"/faq"}>
          <Faq />
        </Route>
        <Route path={"/openings"}>
          <Openings />
        </Route>
      </Switch>
      <Banner />
      <Foot />
    </div>
  );
}
