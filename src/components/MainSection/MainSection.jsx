import { Box, Container, Divider, Typography } from "@mui/material";

export default function MainSection(){
    return(
        <Box 
            // sx={{height:'100vh'}}
        >
            <Container maxWidth="lg" >
                <Box 
                    sx={{
                        display:'flex',
                        flexDirection:'column'
                    }}
                >
                    {/* TITLE CARS */}
                    <Box 
                        sx={{
                            textAlign:'center',
                            my:4
                        }}
                    >
                        <Typography variant="h3" color="common.black">
                            Our featured models
                        </Typography>                          
                        <Divider />
                    </Box>

                    {/* CONTENT CARS */}
                    <Box>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit vel deserunt, quo quibusdam quos tenetur sint eum quaerat eaque fugiat aut quas? Quibusdam ab repellat quisquam impedit repudiandae facere vero consequatur. Cupiditate repudiandae quidem consequuntur hic, sapiente eum veritatis corrupti harum culpa, tempore nihil unde? Temporibus ipsam quas voluptatem sequi animi vero eius totam laboriosam, repellendus saepe fugiat distinctio tenetur ab molestias doloribus minus asperiores. Reiciendis quo aut necessitatibus molestiae architecto temporibus cupiditate eaque recusandae perferendis voluptatibus. Laborum distinctio nihil illo eaque voluptates nam quia neque quam voluptatem qui illum repudiandae commodi quis quaerat, delectus corrupti atque, dolorum suscipit.
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}