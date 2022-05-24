import { UpdownButton } from '@lyket/react';

function LikeCafe () {
  return (
    <div>
      <UpdownButton
        id="like-or-dislike"
        namespace="post"
      />
    </div>
    );
  };

export default LikeCafe;