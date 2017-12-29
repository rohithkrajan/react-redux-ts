import * as React from 'react';
import * as enzyme from 'enzyme';
import Header from './Header';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });


it("renders 'new merchant' link in the header when type is merchants_index",()=>{
    const header=enzyme.render(<Header type="merchants_index"/>);
    expect(header.find(".text-xs-right").text()).toContain("New Merchant")
});
