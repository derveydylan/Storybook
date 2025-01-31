import React from 'react';
import Button from './Button';
export default {
    title: 'Components/Button',
    component: Button,
    decorators: [
        (Story) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Story />
          </div>
        ),
      ],
};

const Template = (args) => <Button {...args} />;

const label = "Button";

export const Primary = Template.bind({});
Primary.args = {
    label: label,
    color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: label,
    color: "secondary"
};

export const Ternary = Template.bind({});
Ternary.args = {
    label: label,
    color: "ternary"
};