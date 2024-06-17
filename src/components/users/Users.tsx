import { useUserById } from "../../services/querises";

import { useParams } from "react-router-dom";

import { useUpdateUser } from "../../services/mutation";
import UserForm from "./UserForm";
import { userValidation } from "../../types/UserValidation";

const Post = () => {
  const { id } = useParams();

  let usersIdsQuery = useQueryIn(`${id}`);

  const createUserMutation = useUpdateUser();

  if (usersIdsQuery.isPending) {
    return <span>...Loading</span>;
  }
  if (usersIdsQuery.isError) {
    return <span>Error Loading !</span>;
  }

  const handleSubmit = async (updatedPost: userValidation) => {
    const newdata = { id, ...updatedPost };
    await createUserMutation.mutate(newdata);
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Update User
        </h3>
      </div>

      <div className="max-w-lg mx-auto">
        {usersIdsQuery.data && (
          <UserForm
            initialValue={usersIdsQuery.data}
            onSubmit={handleSubmit}
            createUserMutation={createUserMutation}
          />
        )}
      </div>
    </>
  );
};
function useQueryIn(id: string) {
  const usersIdsQuery = useUserById(id);
  return usersIdsQuery;
}
export default Post;
