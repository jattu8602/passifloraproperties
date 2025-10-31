import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const PropertyForm = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Learn more about 7614 Chicago Ave S
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-bold mb-6">More about this property</h3>

            <div>
              <label className="text-sm block mb-2">
                Full name<span className="text-destructive">*</span>
              </label>
              <Input className="rounded-lg" />
            </div>

            <div>
              <label className="text-sm block mb-2">
                Email<span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                defaultValue="chaurasiyanitesh68@gmail.com"
                className="rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">
                Phone<span className="text-destructive">*</span>
              </label>
              <Input type="tel" className="rounded-lg" />
            </div>

            <div>
              <Select>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Are you buying or selling?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buying">Buying</SelectItem>
                  <SelectItem value="selling">Selling</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm block mb-2">
                How can an agent help?
              </label>
              <Textarea
                defaultValue="I am interested in 7614 Chicago Ave S."
                className="rounded-lg min-h-24"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="military-form" className="mt-1" />
              <label htmlFor="military-form" className="text-sm">
                I've served in the U.S. military
              </label>
            </div>

            <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12">
              Email agent
            </Button>

            <p className="text-xs text-muted-foreground leading-relaxed">
              By proceeding, you consent to receive calls and texts at the
              number you provided, including marketing by autodialer and
              prerecorded and artificial voice, and email, from realtor.com and
              others about your inquiry and other home-related matters, but not
              as a condition of any purchase.{' '}
              <a href="#" className="underline">
                More...
              </a>
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Property"
              className="w-full h-full object-cover min-h-[500px]"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="font-medium text-foreground mb-1">
                Listed by Haile Ido
              </div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">
                Broker location:
              </div>
              <div>BURNSVILLE, MN</div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">Brokerage:</div>
              <div>Northstar MLS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyForm
