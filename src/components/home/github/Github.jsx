import { GitHub as GitHubIcon } from "lucide-react";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import FadeIn from "../../common/FadeIn";
import Card from "../../common/Card";

function GitHubSection() {
    return (
        <section className="py-28">
            <Container>

                <SectionTitle
                    subtitle="OPEN SOURCE"
                    title="GitHub Activity"
                />

                <FadeIn>

                    <Card>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <GitHubIcon
                                    size={80}
                                    className="text-cyan-400 mb-6"
                                />

                                <h3 className="text-3xl font-bold">

                                    Building Projects Every Week

                                </h3>

                                <p className="text-zinc-400 mt-6 leading-8">

                                    I enjoy building React applications,
                                    experimenting with modern frontend
                                    technologies and continuously improving
                                    my development workflow.

                                </p>

                                <div className="mt-8">

                                    <Button>

                                        Visit GitHub

                                    </Button>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-6">

                                <Card>

                                    <h2 className="text-4xl font-bold text-cyan-400">

                                        2+

                                    </h2>

                                    <p>Repositories</p>

                                </Card>

                                <Card>

                                    <h2 className="text-4xl font-bold text-cyan-400">

                                        React

                                    </h2>

                                    <p>Favorite Stack</p>

                                </Card>

                                <Card>

                                    <h2 className="text-4xl font-bold text-cyan-400">

                                        Daily

                                    </h2>

                                    <p>Learning</p>

                                </Card>

                                <Card>

                                    <h2 className="text-4xl font-bold text-cyan-400">

                                        Git

                                    </h2>

                                    <p>Version Control</p>

                                </Card>

                            </div>

                        </div>

                    </Card>

                </FadeIn>

            </Container>
        </section>
    );
}

export default GitHubSection;