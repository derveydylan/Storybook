import React from 'react';
import Input from './Input';
export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const NoLabel = Template.bind({});
NoLabel.args = {
    showLabel: false
};

export const Small = Template.bind({});
Small.args = {
    ...NoLabel.args,
    size: "small"
};

export const Large = Template.bind({});
Large.args = {
    ...NoLabel.args,
    size: "large"
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...NoLabel.args,
    isDisabled: true
};