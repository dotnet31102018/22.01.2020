using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factory
{
    public static class Login
    {
        // unique user name
        private static Dictionary<string, User> mapUserNameToUser = new Dictionary<string, User>()
        {
            { "admin", new Administrator { Name = "admin", Password="1234"} }
        };
        private static Dictionary<Type, Func<FacadeBase>> createFunc = new Dictionary<Type, Func<FacadeBase>>
        {
            { typeof(Customer), () => { return new CustomerFacade();  } },
            { typeof(Airline), () => { return new AirlineFacade();  } },
            { typeof(Administrator), () => { return new AdminFacade();  } },
        };

        public static FacadeBase TryLogin(string username, string password)
        {
            if (username == null)
                return new AnonymousFacade();

            if (mapUserNameToUser.TryGetValue(username, out User user))
            {
                if (user.Password == password)
                {
                    return createFunc[user.GetType()].Invoke();
                }
                else
                {
                    throw new WrongPasswordException($"login failed for {username}");
                }
            }
            throw new UserNotExistException($"User {username} does not exist");
        }
    }
}
