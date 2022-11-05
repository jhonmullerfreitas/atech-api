import listAllConvAlimenService from "../../services/convAlimen/listAllConvAlimen.service"

const listAllConvAlimenController = (request, response) => {
  const allConvAlimen = listAllConvAlimenService();

  return response.json(allConvAlimen);
};

export default listAllConvAlimenController;
