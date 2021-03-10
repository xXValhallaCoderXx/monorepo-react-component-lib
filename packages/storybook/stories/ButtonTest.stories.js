import React from "react";

import { Button } from "@valhalla-ui/core/lib/molecules/button";

export default {
  title: "Example2/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "secondary",
  label: "Button",
};
