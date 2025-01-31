import React from 'react';
import Title from './Title';
export default {
    title: 'Components/Title',
    component: Title,
};

const Template = (args) => <Title {...args} />;


export const Left = Template.bind({});
Left.args = {
    alignment: "left",
    text: "Title"
}

export const Centered = Template.bind({});
Centered.args = {
    ...Left.args,
    alignment: "center"
};

export const Right = Template.bind({});
Right.args = {
    ...Left.args,
    alignment: "right"
};