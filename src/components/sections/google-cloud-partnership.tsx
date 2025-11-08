import Image from 'next/image';
import { Building2, FlaskConical } from 'lucide-react';

const affiliations = [
  {
    name: "Monash University",
    role: "Medical Student & Researcher",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Monash_University_Logo.svg/1200px-Monash_University_Logo.svg.png",
  },
  {
    name: "iBRAIN Laboratory",
    role: "Affiliate Researcher",
    logo: "https://www.monash.edu/__data/assets/git_bridge/0010/292923/deploy/mysource_files/monash-logo-mono.svg",
  },
  {
    name: "Alfred Health",
    role: "Honorary Research Fellow",
    logo: "https://www.alfredhealth.org.au/themes/custom/alfredhealth/logo.svg",
  },
  {
    name: "Stanford iGEM",
    role: "AI/ML Lead",
    logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/Stanford-Seal.png",
  },
];

const GoogleCloudPartnership = () => {
  return (
    <section className="bg-space py-12 md:py-24">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl lg:grid-cols-2">
          {/* Left Side - About */}
          <div className="relative border border-strokeDark bg-eerie p-8 md:p-12 lg:p-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/images/grid-dot-6.png')`,
                backgroundSize: '20px 20px',
                backgroundRepeat: 'repeat'
              }}
            />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-fire" />
                <p className="text-14 uppercase tracking-[0.2em] text-fire">
                  Affiliations & Collaborations
                </p>
              </div>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3.5rem)] font-light uppercase leading-[1.1] text-mist">
                Working With
                <br />
                Leading
                <br />
                Institutions
              </h2>
              <p className="mb-6 text-18 font-light leading-relaxed text-mist/80">
                Collaborating across continents with world-class research institutions and clinical trial teams to translate AI innovations into real-world healthcare impact.
              </p>
              <div className="flex items-center gap-3 text-15 text-mist/70">
                <FlaskConical className="h-5 w-5 text-orange-accent" />
                <span>Remote research collaboration across Australia, USA, and Malaysia</span>
              </div>
            </div>
          </div>

          {/* Right Side - Institutions Grid */}
          <div className="relative overflow-hidden border border-l-0 border-strokeDark bg-gradient-to-br from-fire/10 via-orange-accent/10 to-blue-accent/10 p-8 md:p-12 lg:border-l lg:p-16">
            <div className="grid h-full grid-cols-2 gap-6">
              {affiliations.map((affiliation, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center rounded-xl border border-strokeDark bg-mist/95 p-6 transition-all duration-300 hover:border-fire hover:shadow-lg"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
                    alt="Corner decoration"
                    width={20}
                    height={21}
                    className="absolute -left-px -top-px"
                  />
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
                    alt="Corner decoration"
                    width={20}
                    height={21}
                    className="absolute -right-px -top-px rotate-90"
                  />
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
                    alt="Corner decoration"
                    width={20}
                    height={21}
                    className="absolute -bottom-px -left-px -rotate-90"
                  />
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/17c44d76-55a1-4d6f-bd4b-99d581bc79e8-aui-io/assets/svgs/corner-light_28b1ebd8-4.svg"
                    alt="Corner decoration"
                    width={20}
                    height={21}
                    className="absolute -bottom-px -right-px rotate-180"
                  />
                  
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-eerie/5">
                    <Building2 className="h-8 w-8 text-fire" />
                  </div>
                  <h3 className="mb-2 text-center text-15 font-normal text-eerie">
                    {affiliation.name}
                  </h3>
                  <p className="text-center text-14 text-eerie/70">
                    {affiliation.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCloudPartnership;