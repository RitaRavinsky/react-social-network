import { create } from "react-test-renderer"
import Paginator from "./Paginator"

describe("paginator component tests", () => {
    test("pageCount is 11 but only 10 should be displayed", ()=> {
        const component = create(
          <Paginator totalItemsCount="11" portionSize="10" pageSize="1" />
        );
        const root =component.root;
        let lis = root.findAllByType("li");
        expect(lis.length).toBe(10)
        
    })
    test("if pageCount is bigger than 10, NEXT button should appear", () => {
        const component = create(<Paginator totalItemsCount="11" portionSize="10" pageSize="1" />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1)
    })
})