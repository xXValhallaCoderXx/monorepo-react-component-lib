import React from "react";

import { Text } from "@valhalla-ui/core/lib/atoms/typography";

export default {
  title: "Example2/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
