import styled from 'styled-components';

export const Board = styled.table`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	margin: 0 auto;
	border-collapse: collapse;
`;

export const Generation = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	color: ${p => p.theme.font};
	font-size: 1.75em;
	border: 2px solid ${p => p.theme.button.background};
	padding: 10px;
	margin: 0 40%;
	text-align: center;
	text-shadow: 0px 0px 2px ${p => p.theme.font};
	font-weight: 700;

  @media only screen and (max-width: 700px) {
    margin: 0 25%;
  } 
`;

export const Row = styled.tr`
	&:first-of-type {
		border-left: 5px solid ${p => p.theme.border};
	}

	&:last-of-type {
		border-right: 5px solid ${p => p.theme.border};
	}
`;

export const Cell = styled.td`
	background-color: black;
	color: transparent;
	padding: calc(1px + 0.4vw);
	font-size: 0.01vw;
	border: 1px solid ${p => p.theme.background};
	max-width: 100%;
	max-height: 100%;
  width: 0.3vw;
  height: 0.3vh;
	display: flex;

	&:first-of-type {
		border-top: 6px solid ${p => p.theme.border};
	}

	&:last-of-type {
		border-bottom: 6px solid ${p => p.theme.border};
	}

	&.dead {
		background-color: ${p => p.theme.cell.dead};
	}

	&.young {
		background-color: ${p => p.theme.cell.young};
	}

	&.old {
		background-color: ${p => p.theme.cell.old};
	}
`;
