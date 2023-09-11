import { Button } from "../../components/Button/Button";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
export const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {expense.description}
              </th>
              <td className="px-6 py-4">${expense.amount.toFixed(2)}</td>
              <td className="px-6 py-4">{expense.category}</td>
              <td className="px-6 py-4">
                <Button
                  buttonType="danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {expenses.length === 0 ? (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                colSpan={4}
                className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                No result found.
              </td>
            </tr>
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td className="px-6 py-4">
                $
                {expenses
                  .reduce(
                    (totalAmount, expense) => expense.amount + totalAmount,
                    0
                  )
                  .toFixed(2)}
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};
