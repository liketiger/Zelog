import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from './post-item.module.css';

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <Card sx={{ borderRadius: 3 }}>
          <CardActionArea>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
                {formattedDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {excerpt}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </li>
  );
}

export default PostItem;