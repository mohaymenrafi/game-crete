import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Nav = () => {
	return (
		<StyledNav>
			<Logo></Logo>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)``;
const Logo = styled(motion.div)``;

export default Nav;
