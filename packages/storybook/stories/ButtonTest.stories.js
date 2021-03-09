import React from "react";

import { Button } from "@valhalla-ui/valhalla-ui/lib/molecules/button";

export default {
  title: "Example2/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
