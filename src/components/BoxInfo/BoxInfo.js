import { Box } from "components/Box"

export const BoxInfo = ({ title, text }) => {
    return (
        <Box display="flex" gridGap={3} flexDirection="column" >
            <h2>{title}</h2>
            <p>{text}</p>
        </Box>
    )
}