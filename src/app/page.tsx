import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="" id="home">
      <h1 className="text-8xl font-bold text-center font-heading">
        Play Chess
        <br /> Anytime, Anywhere
      </h1>
      <p className="w-2/3 px-12 mx-auto text-center text-lg font-body my-8 ">
        Play chess in real-time with friends or opponents worldwide. Join
        instantly in guest mode or invite friends with a shareable link. No
        sign-up needed – just pure chess, anytime, anywhere!
      </p>
      <div>
        <Button size="lg" className="me-5">
          Play Now
        </Button>
        <Button size="lg" variant="secondary" className="ms-5">
          Register Now
        </Button>
      </div>
    </div>
  );
}
