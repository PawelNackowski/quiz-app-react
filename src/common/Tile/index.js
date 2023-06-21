import {Answers, Header, Wrapper} from "./styled";
import {Pagination} from "./Pagination";

export const Tile = ({title}) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <Answers>
                <input type="checkbox" value="1"/>pierwsza odpowiedź
                <input type="checkbox" value="2"/>druga odpowiedź
                <input type="checkbox" value="3"/>trzecia odpowiedź
            </Answers>
            <Pagination/>
        </Wrapper>
    )
}