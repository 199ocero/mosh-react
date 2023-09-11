import categories from "../categories";
interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}
export const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <div className="w-48">
      <label
        htmlFor="categories"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a Category
      </label>
      <select
        onChange={(e) => onSelectedCategory(e.target.value)}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
