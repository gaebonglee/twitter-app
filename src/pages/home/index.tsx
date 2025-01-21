export interface PostProps {
  id: string;
  email: string;
  content: string;
  createAt: string;
  uid: string;
}
const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "ggg",
    createAt: "2025-01-01",
    uid: "1231234",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "ggg",
    createAt: "2025-01-01",
    uid: "1231234",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "ggg",
    createAt: "2025-01-01",
    uid: "1231234",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "ggg",
    createAt: "2025-01-01",
    uid: "1231234",
  },
];
export default function Homepage() {
  return <div>homepage</div>;
}
