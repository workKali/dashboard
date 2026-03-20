'use client'
import { Button, Typography, Box, Card, CardContent } from "@mui/material";
import { Home as HomeIcon, Description as DescriptionIcon } from "@mui/icons-material";
import DesignShowcase from "@/examples/design-showcase";
import Image from "next/image";


const Designs = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                bgcolor: 'background.default'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    width: '100%',
                    maxWidth: 600,
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 8,
                    px: 4
                }}>
                    <Image
                        style={{ marginBottom: 24 }}
                        src="/next.svg"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                        <Card sx={{ maxWidth: 600, p: 2 }}>
                            <CardContent>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    To get started, edit page.tsx file.
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Looking for a starting point or more instructions? Head over to{" "}
                                    <Button variant="text" href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                                        Templates
                                    </Button>{" "}
                                    or{" "}
                                    <Button variant="text" href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                                        Learning
                                    </Button>{" "}
                                    center.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Button
                                variant="contained"
                                startIcon={<HomeIcon />}
                                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ minWidth: 158 }}
                            >
                                Deploy Now
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<DescriptionIcon />}
                                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ minWidth: 158 }}
                            >
                                Documentation
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Design System Showcase */}
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <DesignShowcase />
                </Box>
            </Box>
        </div>
    );
};

export default Designs;