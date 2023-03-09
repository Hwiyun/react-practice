import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: #f00;
    font-size: 20px;
    font-weight: bold;
`;

/**
 * 
 * Compnent Composition(컴포넌트 합성)
 */
function Content(children) {
    return (
        <StyledP>
            {children}
        </StyledP>
    );
}

export default Content;