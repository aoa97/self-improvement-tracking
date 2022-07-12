import Container from "../components/layout/Container";
import FocusList from "../components/Focus/FocusList";
import FocusForm from "../components/Focus/FocusForm";

export default function Focus() {
  return (
    <Container>
      <h2 className="mb-4 text-2xl font-medium">Prioritize to focus</h2>

      <p className="mb-4 md:text-lg">
        In many cases, less is more. Doing few things well is much better than
        doing many things poorly. Rather than strech yourself, focus on what you
        can excel at.
      </p>

      <div className="md:w-3/5">
        <FocusForm />
        <FocusList />
      </div>
    </Container>
  );
}
