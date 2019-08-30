import React from "react";
import ExampleWorkModal from "../js/example-work-modal";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  title: "Work Example",
  href: "http://example.com",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat arcu id risus eleifend, ac auctor risus egestas. In eu ipsum lacus.",
  image: {
    desc: "example screenshot of a project involving code",
    src: "images/example1.png",
    comment: ""
  }
};

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample} open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />);
  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });
  it("Should link to our project", () => {
    expect(anchors.prop("href")).toEqual(myExample.href);
  });
  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
});
