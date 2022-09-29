import Image from 'next/image';

const SignIn = () => {
  return (
    <main className="min-h-screen justify-around flex flex-col max-w-[1500px] mx-auto p-4">
      <section class="">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div class="md:w-8/12 lg:w-5/12 p-10 border rounded-lg">
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap text-[#6E41E2]">
                EventPre
              </div>
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap text-[#6E41E2]">
                <Image
                  className="items-center mx-auto"
                  src="/undraw_login.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="mb-10 text-center text-3xl font-extrabold whitespace-nowrap">
                Log in
              </div>
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  class="inline-block text-white w-full bg-[#6E41E2] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <a
                  class="inline-block w-full bg-white text-black font-medium rounded-lg text-sm text-center mr-3 md:mr-0"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className="flex justify-center space-x-4 items-center border-2 rounded-lg p-2 w-full">
                    <div>
                      <Image
                        src="/icons8-google.svg"
                        alt="Vercel Logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>Continue with Google</div>
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
