import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function Media(props) {
    const { loading = false } = props;

    return (
        <Card sx={{ m: 2 }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        'Ted'
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        '5 hours ago'
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{ height: 250 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    height="250"
                    image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                    alt="Nicola Sturgeon on a TED talk stage"
                />
            )}
            <CardContent>
                {loading ? (
                    <>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                    </Typography>
                )}
            </CardContent>
            {!loading && (
                <CardActions disableSpacing>
                    <Box display="flex" justifyContent="space-around" width="100%">
                        <Box display="flex" alignItems="center">
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary">Like</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <IconButton aria-label="comment">
                                <CommentIcon />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary">Comment</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary">Share</Typography>
                        </Box>
                    </Box>
                </CardActions>
            )}
        </Card>
    );
}

export default function TestPost() {
    return (
        <div>
            <Media />
            <Media loading />
        </div>
    );
}