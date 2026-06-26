import {
  Card,
  CardContent,
  CardActions,
  Skeleton,
} from "@mui/material";

function UserSkeleton() {
  return (
    <Card sx={{ maxWidth: 270 }}>
      <Skeleton variant="rectangular" width={270} height={300} />

      <CardContent>
        <Skeleton variant="text" width="80%" height={40} />
      </CardContent>

      <CardActions>
        <Skeleton variant="rounded" width={90} height={36} />
        <Skeleton variant="rounded" width={110} height={36} />
      </CardActions>
    </Card>
  );
}

export default UserSkeleton;