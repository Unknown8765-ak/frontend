import RecentPosts from "./RecentPosts";
import PopularPosts from "./PopularPosts";
import Tags from "./Tags";

const Sidebar = ({
  recentPosts = [],
  popularPosts = [],
  tags = [],
}) => {
  return (
    <aside className="space-y-8">

      <RecentPosts posts={recentPosts} />

      <PopularPosts posts={popularPosts} />

      {/* <Tags tags={tags} /> */}

    </aside>
  );
};

export default Sidebar;